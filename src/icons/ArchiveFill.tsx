import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchiveFillProps = Omit<IconBaseProps, 'children'>;

const ArchiveFill = memo(
  forwardRef<SVGSVGElement, ArchiveFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="archive-fill" {...props}>
      <path fillRule="evenodd" d="M18.6 3.13q.6 0 1.06.02.45.02.92.23.68.36 1.04 1.04.2.46.23.92.03.45.02 1.06v.2q0 .6-.02 1.06-.02.45-.23.92-.27.52-.75.85v5.77q.01 1.24-.04 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V9.43a2.4 2.4 0 0 1-.75-.85q-.2-.46-.23-.92-.03-.45-.02-1.06v-.2q0-.6.02-1.06.02-.45.23-.92.36-.68 1.04-1.04.46-.2.92-.23.45-.03 1.06-.02zm-8.6 9a.88.88 0 0 0 0 1.74h4a.88.88 0 0 0 0-1.74zM5.4 4.87c-.43 0-.7 0-.91.02a1 1 0 0 0-.27.05.6.6 0 0 0-.28.28c0 .01-.03.07-.05.27l-.02.91v.2c0 .43 0 .7.02.91.02.2.04.26.05.27q.1.19.28.28c.01 0 .07.03.27.05l.91.02h13.2c.43 0 .7 0 .91-.02.2-.02.26-.04.27-.05a.6.6 0 0 0 .28-.28c0-.01.03-.07.05-.27l.02-.91v-.2c0-.43 0-.7-.02-.91a1 1 0 0 0-.05-.27.6.6 0 0 0-.28-.28 1 1 0 0 0-.27-.05l-.91-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchiveFill.displayName = 'ArchiveFill';

// Triple export pattern (lucide-react style)
export { ArchiveFill, ArchiveFill as ArchiveFillIcon, ArchiveFill as SiArchiveFill };
export default ArchiveFill;
export type { ArchiveFillProps };
