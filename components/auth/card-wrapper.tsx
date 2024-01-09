"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface Props {
    children: React.ReactNode;
    headerLabel: string;
    backbuttonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonHref,
    backbuttonLabel,
    showSocial
}: Props) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                    <CardFooter>
                        <Social />
                    </CardFooter>
                )
            }
            <CardFooter>
                <BackButton label={backbuttonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    )
}