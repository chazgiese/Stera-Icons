import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StoreRegularProps = Omit<IconBaseProps, 'children'>;

const StoreRegular = memo(
  forwardRef<SVGSVGElement, StoreRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="store" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.84 2.25a3.75 3.75 0 0 1 3.56 2.56l1.09 3.27c.19.58.22 1.3-.15 1.94q-.6 1.03-1.59 1.64v4.54q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-4.54q-.99-.61-1.59-1.64a2.4 2.4 0 0 1-.14-1.94L2.6 4.81a3.75 3.75 0 0 1 3.56-2.56zm-5.94 13.5q-.62 0-.92.02a1 1 0 0 0-.32.06 1 1 0 0 0-.33.33 1 1 0 0 0-.06.32q-.03.29-.02.92v2.85h3.5V17.4q0-.62-.02-.92a1 1 0 0 0-.06-.32 1 1 0 0 0-.33-.33 1 1 0 0 0-.32-.06q-.29-.02-.92-.02zm3.43-5.22A4.2 4.2 0 0 1 12 12.25a4.2 4.2 0 0 1-3.33-1.72 4.2 4.2 0 0 1-3.92 1.68v3.99c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21s1.03.04 1.86.04V17.4q0-.6.02-1.05t.23-.87q.33-.65.98-.98c.28-.15.58-.2.87-.23q.44-.02 1.05-.02h.2q.6 0 1.05.02t.87.23q.65.33.99.98.2.43.22.87t.02 1.05v2.85c.83 0 1.4 0 1.86-.04.45-.04.71-.1.91-.2q.65-.34.99-.99c.1-.2.17-.46.2-.91.04-.46.04-1.06.04-1.91v-4q-.28.05-.58.05a4.2 4.2 0 0 1-3.34-1.72M6.16 3.75c-.97 0-1.83.62-2.13 1.54l-1.1 3.27q-.13.46.03.7a2.8 2.8 0 0 0 2.37 1.49c1.13 0 2.16-.78 2.64-2.02a.75.75 0 0 1 1.4 0c.47 1.24 1.5 2.02 2.63 2.02s2.16-.78 2.63-2.02l.05-.1a.75.75 0 0 1 1.35.1c.48 1.24 1.52 2.02 2.64 2.02.95 0 1.83-.56 2.38-1.48q.15-.25.01-.71l-1.09-3.27a2.25 2.25 0 0 0-2.13-1.54z" clipRule="evenodd" />
    </IconBase>
  ))
);

StoreRegular.displayName = 'StoreRegular';

// Triple export pattern (lucide-react style)
export { StoreRegular, StoreRegular as StoreRegularIcon, StoreRegular as SiStoreRegular };
export type { StoreRegularProps };
