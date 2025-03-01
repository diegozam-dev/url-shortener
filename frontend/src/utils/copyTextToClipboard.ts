import { toast } from 'sonner';

const copyTextToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
  toast.info(`Copied: ${text}`);
};

export default copyTextToClipboard;
