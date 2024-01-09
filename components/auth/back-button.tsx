"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link";

interface Props {
    label: string;
    href: string;
}
export const BackButton = ({href, label}: Props) => {
    return (
        <Button size="sm" className="w-full font-normal" variant="link" asChild>
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}