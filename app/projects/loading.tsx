import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Loading() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8 animate-fade-in">
          <Link href="/projects">
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Link>
        </Button>
        <div className="flex flex-col space-y-3">
          <Skeleton className="aspect-video overflow-hidden rounded-lg mb-8" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
