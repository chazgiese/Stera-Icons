import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CapsLockFillProps = Omit<IconBaseProps, 'children'>;

const CapsLockFill = memo(
  forwardRef<SVGSVGElement, CapsLockFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 17.25c.97 0 1.75.78 1.75 1.75v2c0 .97-.78 1.75-1.75 1.75H9c-.97 0-1.75-.78-1.75-1.75v-2c0-.97.78-1.75 1.75-1.75zM10.59 1.85a2 2 0 0 1 2.82 0l8.27 8.27c.78.78.23 2.13-.89 2.13h-4.04V14c0 .97-.78 1.75-1.75 1.75H9c-.97 0-1.75-.78-1.75-1.75v-1.75H3.21a1.25 1.25 0 0 1-.89-2.13z" />
    </IconBase>
  ))
);

CapsLockFill.displayName = 'CapsLockFill';

// Triple export pattern (lucide-react style)
export { CapsLockFill, CapsLockFill as CapsLockFillIcon, CapsLockFill as SiCapsLockFill };
export type { CapsLockFillProps };
