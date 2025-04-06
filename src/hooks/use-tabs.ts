import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export enum Tab {
  REPO = "repo",
  TECH = "tech",
  PERFORMANCE = "performance"
}

export const useTabWithParams = <T extends string>(tabs: readonly T[]) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<T>(
      (searchParams.get("tab") as T) || tabs[0]
    );

    // Update URL when tab changes
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("tab", activeTab);
        router.push(`?${params.toString()}`, { scroll: false });
    }, [activeTab, router, searchParams]);

    const handleTabChange = useCallback((tab: T) => {
        setActiveTab(tab);
    }, []);

    return { activeTab, handleTabChange };
};