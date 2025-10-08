import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";

export const Pagination = ({ page, limit, total, onPageChange }) => {
  const totalPages = Math.ceil(total / limit);
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-t border-neutral-200 rounded-b-xl">
      <p className="text-sm text-neutral-600">
        Hiển thị {(page - 1) * limit + 1} - {Math.min(page * limit, total)} trên{" "}
        {total}
      </p>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}>
          <ChevronLeft size={16} />
          Trước
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}>
          Sau
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};
