import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowerRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.04 3.14a3.7 3.7 0 0 1 4.33-.34 3.6 3.6 0 0 1 1.87 3.9q-.14.76-.54 1.47.83.01 1.58.28c1.4.5 2.47 1.7 2.47 3.55a3.6 3.6 0 0 1-2.47 3.55q-.75.27-1.58.27.4.72.54 1.49a3.6 3.6 0 0 1-1.87 3.9c-1.6.9-3.19.6-4.33-.35q-.61-.52-1.04-1.22-.42.7-1.04 1.22a3.7 3.7 0 0 1-4.33.34 3.6 3.6 0 0 1-1.87-3.9q.13-.75.54-1.48-.83 0-1.58-.27A3.6 3.6 0 0 1 1.25 12a3.6 3.6 0 0 1 2.47-3.55q.75-.27 1.58-.28a5 5 0 0 1-.54-1.48 3.6 3.6 0 0 1 1.87-3.9c1.6-.9 3.19-.6 4.33.35q.61.51 1.04 1.22.42-.7 1.04-1.22M10 4.29a2.2 2.2 0 0 0-2.63-.2c-1.01.59-1.3 1.45-1.14 2.34.17.93.84 1.9 1.8 2.45l.27.15q-.48.58-.75 1.3l-.26-.15-.18-.1a3.8 3.8 0 0 0-2.88-.22c-.87.31-1.48 1-1.48 2.14s.61 1.83 1.48 2.14c.91.33 2.1.23 3.06-.32l.26-.15q.27.72.75 1.3l-.26.15a3.7 3.7 0 0 0-1.8 2.45c-.16.89.12 1.75 1.13 2.33 1.02.58 1.93.39 2.63-.2a3.7 3.7 0 0 0 1.25-2.76v-.25a5 5 0 0 0 1.5 0v.25c0 1.1.5 2.15 1.25 2.76.7.59 1.61.78 2.63.2s1.3-1.44 1.14-2.33a3.7 3.7 0 0 0-1.8-2.45l-.27-.15q.47-.58.75-1.3l.26.15.18.1c.93.46 2.02.53 2.88.22.87-.31 1.48-1 1.48-2.14s-.61-1.83-1.48-2.14a3.8 3.8 0 0 0-2.88.22l-.18.1-.26.15a5 5 0 0 0-.75-1.3l.26-.15a3.7 3.7 0 0 0 1.8-2.45c.16-.89-.12-1.75-1.13-2.33a2.2 2.2 0 0 0-2.63.2 3.7 3.7 0 0 0-1.25 2.76v.25a5 5 0 0 0-1.5 0v-.45A3.7 3.7 0 0 0 10 4.28" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowerRegularDuotone.displayName = 'FlowerRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowerRegularDuotone, FlowerRegularDuotone as FlowerRegularDuotoneIcon, FlowerRegularDuotone as SiFlowerRegularDuotone };
export type { FlowerRegularDuotoneProps };
