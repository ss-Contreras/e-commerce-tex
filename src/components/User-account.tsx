"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { User } from "lucide-react";
import Link from "next/link";

export default function UserAccount() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <User className="h-5 w-5" />
          <span>Account</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <div className="flex grid-flow-row">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="mt-2 ml-2">Sergio Contreras</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => console.log("View Profile")}>
          <Link href='/account/profile'>
            View Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => console.log("View Profile")}>
          <Link href='/auth/login'>
            Sign In
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => console.log("Register")}>
          <Link href='/auth/register'>
            Register
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => console.log("Log Out")}>
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
