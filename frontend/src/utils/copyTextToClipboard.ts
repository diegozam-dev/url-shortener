import { toast } from 'sonner';

const copyTextToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
  toast.success('Copied');
};

export default copyTextToClipboard;
