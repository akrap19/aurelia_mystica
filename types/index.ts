import type { PropsWithChildren } from "react";

export type PropsWithClassName<P = unknown> = P & {
  className?: string;
};

export type BaseComponentProps = PropsWithChildren<{
  className?: string;
}>;
