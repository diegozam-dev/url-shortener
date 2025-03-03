import { NextFunction, Request, Response } from 'express';
import VirusTotalService from '../services/virusTotal.service';
import ErrorCode from '../errors/errorCodes';
import axios from 'axios';
import CustomError from '../errors/customError.error';

const scanUrl = async (req: Request, res: Response, next: NextFunction) => {
  const { url } = req.body;

  try {
    const analysisId = await VirusTotalService.analyze(url);
    const analysisReport = await VirusTotalService.getAnalysisReport(
      analysisId
    );

    const reportStats = analysisReport.data.attributes.stats;
    const { malicious, suspicious } = reportStats;

    if (malicious > 0 && suspicious > 0) {
      res.status(400).json({
        response: ErrorCode.MaliciousUrl,
        message: 'The url sent could be malicious.'
      });
    } else {
      next();
    }
  } catch (error: unknown) {
    let errorCode: string;
    let errorMessage: string;

    if (axios.isAxiosError(error)) {
      if (error.response?.data.error) {
        const scanError = error.response?.data.error;
        errorCode = scanError.code;
        errorMessage = scanError.message;
      } else {
        errorCode = error.code as ErrorCode;
        errorMessage = error.message;
      }
    } else {
      errorCode = ErrorCode.UnknownError;
      errorMessage = 'Server error.';
    }

    next(new CustomError(errorCode as ErrorCode, errorMessage));
  }
};

export default scanUrl;
