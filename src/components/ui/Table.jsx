export const Table = ({ columns, data, loading, renderActions }) => {
  if (loading) {
    return (
      <div className="p-6 text-center text-neutral-500">
        Đang tải dữ liệu...
      </div>
    );
  }
  if (!data || data.length === 0) {
    return (
      <div className="p-6 text-center text-neutral-500">Không có dữ liệu.</div>
    );
  }
  return (
    <div className="flow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50">
            {columns.map((col) => (
              <th
                key={col.key}
                className="p-4 text-left text-xs font-semibold text-neutral-600 uppercase">
                {col.title}
              </th>
            ))}
            {renderActions && (
              <th className="p-4 text-right text-xs font-semibold text-neutral-600 uppercase">
                Hành động
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200">
          {data.map((item, index) => (
            <tr key={item._id || index} className="hover:bg-neutral-50">
              {columns.map((col) => (
                <td key={col.key} className="p-4 text-sm text-neutral-700">
                  {col.render
                    ? col.render(item[col.dataIndex], item)
                    : item[col.dataIndex]}
                </td>
              ))}
              {renderActions && (
                <td className="p-4 text-sm text-right">
                  {renderActions(item)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
