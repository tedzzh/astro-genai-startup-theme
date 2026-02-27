import { useState, useEffect } from "react";
import { Cookie, X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/utils";

export function CookieConsent() {
  const [show, setShow] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShow(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    setShow(false);
  };

  const handleReject = () => {
    const rejected = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(rejected));
    setShow(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setShow(false);
    setShowPreferences(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-lg border bg-background/95 backdrop-blur-sm shadow-2xl">
          {!showPreferences ? (
            // Main Banner
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                    <Cookie className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold">
                    我们重视您的隐私
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    我们使用 Cookie 以提升浏览体验与网站功能。点击「全部接受」即表示您同意我们使用 Cookie。详见
                    <a
                      href={withBase("/privacy#cookies")}
                      className="text-primary hover:underline"
                    >
                      Cookie 说明
                    </a>
                    。
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowPreferences(true)}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    自定义
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleReject}>
                    拒绝
                  </Button>
                  <Button size="sm" onClick={handleAcceptAll}>
                    全部接受
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // Preferences Panel
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Cookie 偏好</h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="rounded-md p-2 hover:bg-accent transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b">
                  <div className="flex-1">
                    <div className="font-medium mb-1">
                      必要 Cookie
                      <span className="ml-2 text-xs text-muted-foreground">
                        （始终启用）
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      网站运行所必需，无法关闭。
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-11 h-6 bg-primary rounded-full flex items-center px-0.5">
                      <div className="w-5 h-5 bg-white rounded-full ml-auto" />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b">
                  <div className="flex-1">
                    <div className="font-medium mb-1">分析 Cookie</div>
                    <p className="text-sm text-muted-foreground">
                      帮助我们了解访客如何使用本站。
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: !prev.analytics,
                      }))
                    }
                    className="flex-shrink-0"
                  >
                    <div
                      className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${
                        preferences.analytics ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          preferences.analytics ? "ml-auto" : ""
                        }`}
                      />
                    </div>
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="font-medium mb-1">营销 Cookie</div>
                    <p className="text-sm text-muted-foreground">
                      用于提供与您相关的个性化内容或广告。
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        marketing: !prev.marketing,
                      }))
                    }
                    className="flex-shrink-0"
                  >
                    <div
                      className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${
                        preferences.marketing ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          preferences.marketing ? "ml-auto" : ""
                        }`}
                      />
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowPreferences(false)}
                >
                  取消
                </Button>
                <Button className="flex-1" onClick={handleSavePreferences}>
                  保存偏好
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
