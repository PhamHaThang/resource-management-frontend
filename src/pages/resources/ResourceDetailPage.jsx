import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ArrowLeft, Calendar, MapPin, Info } from "lucide-react";

import { getResourceDetail } from "../../api/resources";

import { Card, CardContent, CardHeader } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { StatusPill } from "../../components/ui/StatusPill";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs";
import { Skeleton } from "../../components/ui/Skeleton";

import { RESOURCE_STATUS } from "../../constants/status";
import { useAuth } from "../../hooks/useAuth";

const ResourceDetailSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-8 w-1/3" />
    <Card>
      <CardContent>
        <Skeleton className="h-64 w-full mb-4" />
        <Skeleton className="h-8 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  </div>
);
export const ResourceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchResource = async () => {
      setLoading(true);
      try {
        const response = await getResourceDetail(id);
        setResource(response.data.data);
      } catch (error) {
        console.error(error);
        const message =
          error.response?.data?.message || "Không tìm thấy tài nguyên này";
        toast.error(message);
        navigate("/resources");
      } finally {
        setLoading(false);
      }
    };
    fetchResource();
  }, [id, navigate]);
  if (loading) {
    return <ResourceDetailSkeleton />;
  }
  if (!resource) {
    return null;
  }
  const isAdmin = user?.role === "admin";
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Breadcrumbs
          items={[
            { label: "Tài nguyên", path: "/resources" },
            { label: resource.name },
          ]}
        />
        <Button variant="outline" onClick={() => navigate("/resources")}>
          <ArrowLeft size={16} />
          Quay lại
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <img
              src={
                resource.images?.[0] || "https://via.placeholder.com/800x400"
              }
              alt={resource.name}
              className="w-full h-80 object-cover rounded-t-xl"
            />
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h1 className="text-2xl font-bold text-neutral-900">
                  {resource.name}
                </h1>
                <StatusPill tone={RESOURCE_STATUS[resource.status]?.tone}>
                  {RESOURCE_STATUS[resource.status]?.label}
                </StatusPill>
              </div>
              <div className="flex items-center gap-6 text-sm text-neutral-600">
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> {resource.location || "Chưa cập nhật"}
                </span>
                <span className="flex items-center gap-2">
                  <Info size={16} /> {resource.type?.name}
                </span>
              </div>
              <p className="text-neutral-700">{resource.description}</p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader title="Hành động" />
            <CardContent className="space-y-3">
              <Button
                className="w-full"
                disabled={resource.status !== "available"}>
                <Calendar size={18} />
                Đặt lịch ngay
              </Button>
              {isAdmin && (
                <Button variant="outline" className="w-full">
                  Chỉnh sửa
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
