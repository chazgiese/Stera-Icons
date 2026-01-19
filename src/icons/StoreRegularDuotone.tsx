import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StoreRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StoreRegularDuotone = memo(
  forwardRef<SVGSVGElement, StoreRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="store-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20.75 16.2q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-4.54q.68.42 1.5.55v3.99c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21s1.03.04 1.86.04V17.4q0-.6.02-1.05t.23-.87q.33-.65.98-.98c.28-.15.58-.2.87-.23q.44-.02 1.05-.02h.2q.6 0 1.05.02t.87.23q.65.33.98.98c.15.28.2.58.23.87q.02.44.02 1.05v2.85c.83 0 1.4 0 1.86-.04.45-.04.71-.1.91-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-4a4 4 0 0 0 1.5-.54zm-8.85-.45c-.43 0-.71 0-.92.02a1 1 0 0 0-.32.06 1 1 0 0 0-.33.33 1 1 0 0 0-.06.32q-.02.29-.02.92v2.85h3.5V17.4q0-.62-.02-.92a1 1 0 0 0-.06-.32 1 1 0 0 0-.33-.33 1 1 0 0 0-.32-.06q-.29-.02-.92-.02z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17.84 2.25a3.75 3.75 0 0 1 3.56 2.56l1.09 3.27c.19.58.22 1.3-.15 1.94a4.3 4.3 0 0 1-3.67 2.23 4.2 4.2 0 0 1-3.34-1.72A4.2 4.2 0 0 1 12 12.25a4.2 4.2 0 0 1-3.33-1.72 4.2 4.2 0 0 1-3.34 1.72 4.3 4.3 0 0 1-3.67-2.23 2.4 2.4 0 0 1-.14-1.94L2.6 4.81a3.75 3.75 0 0 1 3.56-2.56zM6.16 3.75c-.97 0-1.83.62-2.13 1.54l-1.1 3.27q-.13.46.03.7a2.8 2.8 0 0 0 2.37 1.49c1.13 0 2.16-.78 2.64-2.02a.75.75 0 0 1 1.4 0c.47 1.24 1.5 2.02 2.63 2.02s2.16-.78 2.63-2.02l.05-.1a.75.75 0 0 1 1.35.1c.48 1.24 1.52 2.02 2.64 2.02.95 0 1.83-.56 2.38-1.48q.15-.25.01-.71l-1.09-3.27a2.25 2.25 0 0 0-2.13-1.54z" clipRule="evenodd" />
    </IconBase>
  ))
);

StoreRegularDuotone.displayName = 'StoreRegularDuotone';

// Triple export pattern (lucide-react style)
export { StoreRegularDuotone, StoreRegularDuotone as StoreRegularDuotoneIcon, StoreRegularDuotone as SiStoreRegularDuotone };
export type { StoreRegularDuotoneProps };
