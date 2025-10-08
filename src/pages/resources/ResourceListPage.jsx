import { useEffect, useState, useMemo } from "react";
import { toast } from "react-hot-toast";

import { getResources } from "../../api/resources";
import { getResourceTypes } from "../../api/resourceTypes";

import { Card, CardHeader } from "../../components/ui/Card";
import { Table } from "../../components/ui/Table";
import { Button } from "../../components/ui/Button";
import { StatusPill } from "../../components/ui/StatusPill";
import { SearchInput } from "../../components/ui/SearchInput";
import { Select } from "../../components/ui/Select";
import { Pagination } from "../../components/ui/Pagination";

import { useDebounce } from "../../hooks/useDebounce";
import { RESOURCE_STATUS } from "../../constants/status";
import { useNavigate } from "react-router-dom";

const statusOptions = [
  { value: "", label: "Tất cả trạng thái" },
  ...Object.entries(RESOURCE_STATUS).map(([value, { label }]) => ({
    value,
    label,
  })),
];

export default function ResourceListPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [resourceTypes, setResourceTypes] = useState([]);

  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const debouncedSearch = useDebounce(searchTerm, 500);
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await getResourceTypes({ limit: 100 });
        const types = res.data.data.resourceTypes.map((t) => ({
          value: t._id,
          label: t.name,
        }));
        setResourceTypes([{ value: "", label: "Tất cả loại" }, ...types]);
      } catch (error) {
        console.error(error);
        const message =
          error.response?.data?.message ||
          "Không thể tải danh sách loại tài nguyên";
        toast.error(message);
      }
    };
    fetchTypes();
  }, []);
  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      try {
        const params = {
          page,
          limit,
        };
        if (debouncedSearch) params.name = debouncedSearch;
        if (statusFilter) params.status = statusFilter;
        if (typeFilter) params.type = typeFilter;
        const res = await getResources(params);
        setResources(res.data.data.resources);
        setTotal(res.data.data.total);
      } catch (error) {
        console.error(error);
        const message =
          error.response?.data?.message || "Không thể tải danh sách tài nguyên";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };
    fetchResources();
  }, [page, debouncedSearch, statusFilter, typeFilter, limit]);
  console.log(resources);
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, statusFilter, typeFilter]);
  const columns = useMemo(
    () => [
      {
        title: "Tên tài nguyên",
        dataIndex: "name",
        key: "name",
        render: (_, record) => (
          <div>
            <p className="font-medium text-neutral-800">{record.name}</p>
            <p className="text-xs text-neutral-500">{record.type?.name}</p>
          </div>
        ),
      },
      {
        title: "Vị trí",
        dataIndex: "location",
        key: "location",
      },
      {
        title: "Trạng thái",
        dataIndex: "status",
        key: "status",
        render: (status) => (
          <StatusPill tone={RESOURCE_STATUS[status]?.tone}>
            {RESOURCE_STATUS[status]?.label}
          </StatusPill>
        ),
      },
    ],
    []
  );
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader
          title="Danh sách tài nguyên"
          description="Tất cả tài nguyên có trong hệ thống"
        />
        <div className="p-4 border-b border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SearchInput
              placeholder="Tìm theo tên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClear={() => setSearchTerm("")}
            />
            <Select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              options={resourceTypes}
            />
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              options={statusOptions}
            />
          </div>
        </div>
        <Table
          columns={columns}
          data={resources}
          loading={loading}
          renderActions={(item) => (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(`/resources/${item._id}`)}>
              Xem
            </Button>
          )}
        />

        <Pagination
          page={page}
          limit={limit}
          total={total}
          onPageChange={setPage}
        />
      </Card>
    </div>
  );
}
