import { withTransform } from "../../lib/imagekit";
import { MessageVideo } from "./MessageVideo";
import { useChatStore } from "../../store/useChatStore";
import { Trash2Icon } from "lucide-react";

const IMAGE_TRANSFORM = "q-auto,w-640,f-auto";

export function MessageBubble({ message }) {
  const deleteMessage = useChatStore((state) => state.deleteMessage);

  const isOwnMessage = message.role === "me";
  const hasImage = Boolean(message.imageUrl);
  const hasVideo = Boolean(message.videoUrl);

  const handleDelete = () => {
    const messageId = message._id || message.id;
    if (messageId) {
      deleteMessage(messageId);
    }
  };

  return (
    <div className={`group flex w-full items-center gap-1.5 ${isOwnMessage ? "justify-end" : "justify-start"}`}>
      {isOwnMessage && (
        <button
          type="button"
          onClick={handleDelete}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-muted hover:text-red-500"
          title="Delete message"
        >
          <Trash2Icon className="size-4" />
        </button>
      )}

      <div
        className={`max-w-[min(90%,28rem)] rounded-2xl px-3 py-2 text-[15px] leading-snug sm:max-w-[min(75%,28rem)] sm:px-3.5 ${
          isOwnMessage
            ? "rounded-br-md bg-accent text-accent-foreground"
            : "rounded-bl-md bg-surface"
        }`}
      >
        {hasImage ? (
          <img
            src={withTransform(message.imageUrl, IMAGE_TRANSFORM)}
            alt=""
            className="mb-1.5 max-h-40 max-w-full rounded-lg object-cover sm:max-h-52 sm:rounded-xl"
          />
        ) : null}
        {hasVideo ? <MessageVideo src={message.videoUrl} /> : null}
        {message.text ? (
          <p className="whitespace-pre-wrap wrap-break-word">{message.text}</p>
        ) : null}
        <p
          className={`mt-1 text-[11px] tabular-nums ${
            isOwnMessage ? "text-accent-foreground/75" : "text-muted"
          }`}
        >
          {message.time}
        </p>
      </div>
    </div>
  );
}