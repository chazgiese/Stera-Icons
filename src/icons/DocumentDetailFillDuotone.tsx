import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentDetailFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DocumentDetailFillDuotone = memo(
  forwardRef<SVGSVGElement, DocumentDetailFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="document-detail-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.17 2c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.79l3.63 3.63c.31.3.59.57.79.9a3 3 0 0 1 .36.87c.09.37.08.75.08 1.2v6.37q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 17.43 4 16.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM9.5 16.12a.88.88 0 0 0 0 1.75h5a.87.87 0 1 0 0-1.75zm0-3a.88.88 0 0 0 0 1.75h5a.87.87 0 1 0 0-1.75zM12 4v2.8c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22H18v-.34c0-.24 0-.36-.03-.48a1 1 0 0 0-.12-.29c-.06-.1-.15-.19-.32-.36l-4.06-4.06a2 2 0 0 0-.36-.32 1 1 0 0 0-.3-.12q-.13-.04-.47-.03z" clipRule="evenodd" opacity={.4} />
        <path d="M14.5 16.13a.88.88 0 0 1 0 1.75h-5a.88.88 0 0 1 0-1.75zM14.5 13.13a.88.88 0 0 1 0 1.74h-5a.88.88 0 0 1 0-1.74zM12.34 4c.24 0 .36 0 .48.03q.15.03.29.12c.1.06.19.15.36.32l4.06 4.06c.17.17.26.26.32.36a1 1 0 0 1 .12.3c.03.1.03.23.03.47V10h-2.8c-1.12 0-1.68 0-2.1-.22a2 2 0 0 1-.88-.87C12 8.48 12 7.92 12 6.8V4z" />
    </IconBase>
  ))
);

DocumentDetailFillDuotone.displayName = 'DocumentDetailFillDuotone';

// Triple export pattern (lucide-react style)
export { DocumentDetailFillDuotone, DocumentDetailFillDuotone as DocumentDetailFillDuotoneIcon, DocumentDetailFillDuotone as SiDocumentDetailFillDuotone };
export default DocumentDetailFillDuotone;
export type { DocumentDetailFillDuotoneProps };
