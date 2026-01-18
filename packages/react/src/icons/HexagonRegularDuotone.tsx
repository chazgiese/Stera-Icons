import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HexagonRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HexagonRegularDuotone = memo(
  forwardRef<SVGSVGElement, HexagonRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M2.44 12q0 .36.08.7c.1.5.39.99 1.16 2.25l1.59 2.6c.7 1.15.98 1.6 1.34 1.9q.51.45 1.15.65c.45.14.97.15 2.33.15h3.82c1.36 0 1.87 0 2.33-.15q.63-.21 1.15-.65c.36-.3.63-.75 1.34-1.9l1.59-2.6c.77-1.26 1.05-1.75 1.16-2.24q.08-.36.08-.71h1.5q0 .53-.11 1.03c-.18.8-.64 1.53-1.35 2.7l-1.59 2.6c-.66 1.07-1.06 1.76-1.64 2.26q-.74.63-1.68.94c-.73.23-1.52.22-2.78.22h-3.82c-1.26 0-2.06 0-2.78-.22q-.94-.3-1.68-.95c-.58-.5-.98-1.18-1.64-2.25l-1.6-2.6c-.7-1.17-1.16-1.9-1.34-2.7A5 5 0 0 1 .94 12z" opacity={.4} />
        <path fill="currentColor" d="M13.91 2.25c1.26 0 2.05 0 2.78.22q.95.3 1.68.94c.58.5.98 1.19 1.64 2.26l1.6 2.6c.7 1.17 1.16 1.9 1.34 2.7q.1.5.11 1.03h-1.5q0-.36-.08-.7c-.1-.5-.4-.99-1.16-2.25l-1.59-2.6a8 8 0 0 0-1.34-1.9q-.52-.45-1.15-.65a8 8 0 0 0-2.33-.15h-3.82c-1.36 0-1.88 0-2.33.15q-.64.21-1.15.65c-.36.3-.63.74-1.34 1.9l-1.6 2.6c-.76 1.26-1.04 1.75-1.15 2.24q-.08.36-.08.71H.94q0-.53.11-1.03c.18-.8.64-1.53 1.35-2.7l1.59-2.6c.66-1.07 1.06-1.76 1.64-2.26a5 5 0 0 1 1.68-.94c.72-.23 1.52-.22 2.78-.22z" />
    </IconBase>
  ))
);

HexagonRegularDuotone.displayName = 'HexagonRegularDuotone';

// Triple export pattern (lucide-react style)
export { HexagonRegularDuotone, HexagonRegularDuotone as HexagonRegularDuotoneIcon, HexagonRegularDuotone as SiHexagonRegularDuotone };
export type { HexagonRegularDuotoneProps };
