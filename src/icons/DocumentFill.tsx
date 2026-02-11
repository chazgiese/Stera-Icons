import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentFillProps = Omit<IconBaseProps, 'children'>;

const DocumentFill = memo(
  forwardRef<SVGSVGElement, DocumentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="document-fill" {...props}>
      <path fillRule="evenodd" d="M12.17 2c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.8l3.63 3.62c.31.3.59.57.79.9a3 3 0 0 1 .36.87c.09.37.08.75.08 1.2v6.37q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 17.43 4 16.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM12 6.8c0 1.12 0 1.68.22 2.1q.3.59.87.88c.43.22.99.22 2.11.22H18v-.34c0-.24 0-.36-.03-.48a1 1 0 0 0-.12-.29c-.06-.1-.15-.19-.32-.36l-4.06-4.06a2 2 0 0 0-.36-.32 1 1 0 0 0-.3-.12q-.13-.04-.47-.03H12z" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentFill.displayName = 'DocumentFill';

// Triple export pattern (lucide-react style)
export { DocumentFill, DocumentFill as DocumentFillIcon, DocumentFill as SiDocumentFill };
export default DocumentFill;
export type { DocumentFillProps };
