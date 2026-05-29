"use client";

import React, { useState } from "react";
import {
  Bell,
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Filter,
  X,
} from "lucide-react";

interface Alert {
  id: string;
  type: "new_submission" | "partial_submission" | "incomplete_submission";
  applicationId: string;
  businessName: string;
  abn: string;
  timestamp: string;
  status: "unread" | "read";
  notificationMethod: "email" | "sms" | "both";
}

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: "1",
      type: "new_submission",
      applicationId: "APP-2024-001",
      businessName: "Australian Taxation Office",
      abn: "51 824 753 556",
      timestamp: "2024-05-29T10:30:00",
      status: "unread",
      notificationMethod: "both",
    },
    {
      id: "2",
      type: "partial_submission",
      applicationId: "APP-2024-002",
      businessName: "Tech Solutions Pty Ltd",
      abn: "12 345 678 901",
      timestamp: "2024-05-29T09:15:00",
      status: "unread",
      notificationMethod: "email",
    },
    {
      id: "3",
      type: "incomplete_submission",
      applicationId: "APP-2024-003",
      businessName: "Retail Ventures Group",
      abn: "98 765 432 109",
      timestamp: "2024-05-28T16:45:00",
      status: "read",
      notificationMethod: "sms",
    },
    {
      id: "4",
      type: "new_submission",
      applicationId: "APP-2024-004",
      businessName: "Construction Co",
      abn: "45 678 901 234",
      timestamp: "2024-05-28T14:20:00",
      status: "read",
      notificationMethod: "both",
    },
  ]);

  const [filter, setFilter] = useState<
    "all" | "new_submission" | "partial_submission" | "incomplete_submission"
  >("all");

  const markAsRead = (id: string) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, status: "read" as const } : alert
      )
    );
  };

  const markAllAsRead = () => {
    setAlerts((prev) => prev.map((alert) => ({ ...alert, status: "read" as const })));
  };

  const filteredAlerts = alerts.filter((alert) => {
    if (filter === "all") return true;
    return alert.type === filter;
  });

  const unreadCount = alerts.filter((a) => a.status === "unread").length;

  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "new_submission":
        return <CheckCircle2 size={20} className="text-green-600" />;
      case "partial_submission":
        return <Clock size={20} className="text-yellow-600" />;
      case "incomplete_submission":
        return <AlertTriangle size={20} className="text-red-600" />;
    }
  };

  const getAlertTypeLabel = (type: Alert["type"]) => {
    switch (type) {
      case "new_submission":
        return "New Submission";
      case "partial_submission":
        return "Partial Submission";
      case "incomplete_submission":
        return "Incomplete Submission";
    }
  };

  const getAlertTypeColor = (type: Alert["type"]) => {
    switch (type) {
      case "new_submission":
        return "bg-green-100 text-green-800 border-green-200";
      case "partial_submission":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "incomplete_submission":
        return "bg-red-100 text-red-800 border-red-200";
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    return `${diffDays} days ago`;
  };

  return (
    <div className="min-h-screen bg-[#f5f7f7]">
      <header className="w-full border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Bell size={24} className="text-[#02335C]" />
            <h1 className="text-xl font-bold text-[#0f172a]">
              Application Alerts
            </h1>
            {unreadCount > 0 && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                {unreadCount}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-[#02335C] transition hover:bg-[#e2f0f5]"
              >
                <CheckCircle2 size={16} />
                Mark All as Read
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-[#64748b]" />
              <span className="text-sm font-medium text-[#64748b]">
                Filter by type:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  filter === "all"
                    ? "bg-[#02335C] text-white"
                    : "bg-white text-[#64748b] hover:bg-[#e2f0f5]"
                }`}
              >
                All ({alerts.length})
              </button>
              <button
                onClick={() => setFilter("new_submission")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  filter === "new_submission"
                    ? "bg-[#02335C] text-white"
                    : "bg-white text-[#64748b] hover:bg-[#e2f0f5]"
                }`}
              >
                New ({alerts.filter((a) => a.type === "new_submission").length})
              </button>
              <button
                onClick={() => setFilter("partial_submission")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  filter === "partial_submission"
                    ? "bg-[#02335C] text-white"
                    : "bg-white text-[#64748b] hover:bg-[#e2f0f5]"
                }`}
              >
                Partial ({alerts.filter((a) => a.type === "partial_submission").length})
              </button>
              <button
                onClick={() => setFilter("incomplete_submission")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  filter === "incomplete_submission"
                    ? "bg-[#02335C] text-white"
                    : "bg-white text-[#64748b] hover:bg-[#e2f0f5]"
                }`}
              >
                Incomplete ({alerts.filter((a) => a.type === "incomplete_submission").length})
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredAlerts.length === 0 ? (
              <div className="rounded-xl border border-[#e5e7eb] bg-white p-12 text-center">
                <Bell size={48} className="mx-auto mb-4 text-[#9ca3af]" />
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  No alerts found
                </h3>
                <p className="mt-2 text-sm text-[#64748b]">
                  {filter === "all"
                    ? "You have no alerts at this time."
                    : `No ${filter.replace("_", " ")} alerts found.`}
                </p>
              </div>
            ) : (
              filteredAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`rounded-xl border p-6 transition ${
                    alert.status === "unread"
                      ? "border-[#02335C] bg-[#e2f0f5] shadow-sm"
                      : "border-[#e5e7eb] bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{getAlertIcon(alert.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span
                              className={`rounded-full border px-3 py-1 text-xs font-semibold ${getAlertTypeColor(
                                alert.type
                              )}`}
                            >
                              {getAlertTypeLabel(alert.type)}
                            </span>
                            <span className="text-xs text-[#64748b]">
                              {formatTimestamp(alert.timestamp)}
                            </span>
                            {alert.status === "unread" && (
                              <span className="flex h-2 w-2 rounded-full bg-red-500" />
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-[#0f172a]">
                            {alert.businessName}
                          </h3>
                          <div className="mt-2 space-y-1 text-sm text-[#64748b]">
                            <p>
                              <span className="font-medium">Application ID:</span>{" "}
                              {alert.applicationId}
                            </p>
                            <p>
                              <span className="font-medium">ABN:</span> {alert.abn}
                            </p>
                          </div>
                          <div className="mt-3 flex items-center gap-4 text-xs text-[#64748b]">
                            <div className="flex items-center gap-1">
                              {alert.notificationMethod === "email" && (
                                <>
                                  <Mail size={14} />
                                  <span>Email sent</span>
                                </>
                              )}
                              {alert.notificationMethod === "sms" && (
                                <>
                                  <MessageSquare size={14} />
                                  <span>SMS sent</span>
                                </>
                              )}
                              {alert.notificationMethod === "both" && (
                                <>
                                  <Mail size={14} />
                                  <MessageSquare size={14} />
                                  <span>Email & SMS sent</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        {alert.status === "unread" && (
                          <button
                            onClick={() => markAsRead(alert.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#64748b] transition hover:bg-[#d1d5db]"
                            title="Mark as read"
                          >
                            <X size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-8 rounded-xl border border-[#e5e7eb] bg-white p-6">
            <h3 className="mb-4 font-semibold text-[#0f172a]">
              Notification Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-[#e5e7eb] p-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[#02335C]" />
                  <div>
                    <p className="font-medium text-[#111827]">Email Notifications</p>
                    <p className="text-sm text-[#64748b]">
                      Receive email alerts for new submissions
                    </p>
                  </div>
                </div>
                <div className="relative inline-block h-6 w-11 cursor-pointer rounded-full bg-[#02335C] transition-colors">
                  <span className="absolute right-1 top-1 h-4 w-4 transform rounded-full bg-white transition-transform" />
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-[#e5e7eb] p-4">
                <div className="flex items-center gap-3">
                  <MessageSquare size={20} className="text-[#02335C]" />
                  <div>
                    <p className="font-medium text-[#111827]">SMS Notifications</p>
                    <p className="text-sm text-[#64748b]">
                      Receive SMS alerts for urgent submissions
                    </p>
                  </div>
                </div>
                <div className="relative inline-block h-6 w-11 cursor-pointer rounded-full bg-[#02335C] transition-colors">
                  <span className="absolute right-1 top-1 h-4 w-4 transform rounded-full bg-white transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
