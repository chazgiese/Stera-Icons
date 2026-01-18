import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArchiveRegularProps = Omit<IconBaseProps, 'children'>;

const ArchiveRegular = memo(
  forwardRef<SVGSVGElement, ArchiveRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.6 2.25q.6 0 1.05.02t.87.23q.65.33.98.98.2.43.23.87t.02 1.05v.2q0 .6-.02 1.05t-.23.87q-.26.53-.75.85v7.83q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V8.37q-.49-.32-.75-.85a2 2 0 0 1-.23-.87q-.02-.44-.02-1.05v-.2q0-.6.02-1.05a2.25 2.25 0 0 1 1.2-1.86q.45-.2.88-.22.44-.02 1.05-.02zM3.75 16.2c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V8.75H3.75zM4.4 3.75c-.43 0-.71 0-.92.02a1 1 0 0 0-.32.06 1 1 0 0 0-.33.33 1 1 0 0 0-.06.32q-.03.29-.02.92v.2c0 .43 0 .71.02.92.01.2.04.28.06.32q.11.22.33.33c.04.02.11.05.32.06q.29.03.92.02h15.2q.63 0 .92-.02.28-.02.32-.06a1 1 0 0 0 .33-.33 1 1 0 0 0 .06-.32q.03-.29.02-.92v-.2q0-.62-.02-.92a1 1 0 0 0-.06-.32 1 1 0 0 0-.33-.33 1 1 0 0 0-.32-.06q-.29-.02-.92-.02z" clipRule="evenodd" />
        <path fill="currentColor" d="M15 11.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ArchiveRegular.displayName = 'ArchiveRegular';

// Triple export pattern (lucide-react style)
export { ArchiveRegular, ArchiveRegular as ArchiveRegularIcon, ArchiveRegular as SiArchiveRegular };
export type { ArchiveRegularProps };
