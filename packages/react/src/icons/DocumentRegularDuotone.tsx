import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DocumentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DocumentRegularDuotone = memo(
  forwardRef<SVGSVGElement, DocumentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.67 2.75c.53 0 .67 0 .8.03q.15.04.28.12v2.9q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h2.9q.08.14.12.29c.03.12.03.26.03.79v.42H16.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V2.75z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12.67 1.25c.46 0 .8 0 1.14.08q.42.09.8.33c.3.18.54.43.86.75l4.12 4.12c.32.32.57.57.75.86q.24.38.33.8c.08.33.08.68.08 1.14v7.87q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V6.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zM8.8 2.75c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v10.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h6.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.35.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V9.33c0-.53 0-.67-.03-.8a1 1 0 0 0-.15-.35c-.07-.11-.17-.22-.54-.59l-4.12-4.12a4 4 0 0 0-.59-.54 1 1 0 0 0-.36-.15 4 4 0 0 0-.79-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentRegularDuotone.displayName = 'DocumentRegularDuotone';

// Triple export pattern (lucide-react style)
export { DocumentRegularDuotone, DocumentRegularDuotone as DocumentRegularDuotoneIcon, DocumentRegularDuotone as SiDocumentRegularDuotone };
export type { DocumentRegularDuotoneProps };
