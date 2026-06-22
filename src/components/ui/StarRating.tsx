import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
  outOf?: number;
  className?: string;
};

export function StarRating({ rating, outOf = 5, className = "" }: StarRatingProps) {
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      aria-label={`${rating} out of ${outOf} stars`}
    >
      {Array.from({ length: outOf }).map((_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={1.5}
          className={i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-podhub-line"}
        />
      ))}
    </div>
  );
}
