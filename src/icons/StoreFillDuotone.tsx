import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StoreFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StoreFillDuotone = memo(
  forwardRef<SVGSVGElement, StoreFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="store-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 11.13a3.93 3.93 0 0 0 5.2.7V16q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04H8.8q-1.03.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37q-.05-.7-.04-1.72v-4.18a3.93 3.93 0 0 0 5.2-.7c.76.84 1.8 1.38 3 1.38s2.24-.54 3-1.37m-3 3.57c-.7 0-1.05 0-1.32.14q-.35.18-.54.54C10 15.65 10 16 10 16.7V19h4v-2.3c0-.7 0-1.05-.14-1.32a1.3 1.3 0 0 0-.54-.54c-.27-.14-.62-.14-1.32-.14" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M17.27 3c1.58 0 2.99 1 3.5 2.5l.94 2.74c.21.62.27 1.45-.17 2.18A4.2 4.2 0 0 1 18 12.5c-1.2 0-2.24-.54-3-1.37a4 4 0 0 1-3 1.37c-1.2 0-2.24-.54-3-1.37a4 4 0 0 1-3 1.37c-1.51 0-2.8-.86-3.54-2.08a2.6 2.6 0 0 1-.17-2.18l.94-2.74A3.7 3.7 0 0 1 6.73 3zM14 16.7V19h-4v-2.3c0-.7 0-1.05.14-1.32q.18-.35.54-.54c.27-.14.62-.14 1.32-.14s1.05 0 1.32.14q.35.18.54.54c.14.27.14.62.14 1.32" />
    </IconBase>
  ))
);

StoreFillDuotone.displayName = 'StoreFillDuotone';

// Triple export pattern (lucide-react style)
export { StoreFillDuotone, StoreFillDuotone as StoreFillDuotoneIcon, StoreFillDuotone as SiStoreFillDuotone };
export default StoreFillDuotone;
export type { StoreFillDuotoneProps };
