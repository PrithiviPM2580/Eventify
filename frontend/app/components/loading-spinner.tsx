import { Spinner } from "@/components/ui/spinner";

export function LoadingSpinner({ text }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
      <Spinner className="w-10 h-10" />
      {text && <p className="text-gray-700 font-medium">{text}</p>}
    </div>
  );
}
