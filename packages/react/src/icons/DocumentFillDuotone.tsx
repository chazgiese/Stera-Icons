import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DocumentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DocumentFillDuotone = memo(
  forwardRef<SVGSVGElement, DocumentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.67 1c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.79l4.13 4.13c.31.3.59.57.79.9a3 3 0 0 1 .36.87c.09.37.08.75.08 1.2v7.87q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zM12 6.8c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22H19v-.34c0-.24 0-.36-.03-.48a1 1 0 0 0-.12-.29c-.06-.1-.15-.19-.32-.36l-5.06-5.06c-.17-.17-.26-.26-.36-.32a1 1 0 0 0-.3-.12q-.13-.04-.47-.03H12z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.2 10H19v-.34c0-.24 0-.36-.03-.48a1 1 0 0 0-.12-.29c-.06-.1-.15-.19-.32-.36l-5.06-5.06a2 2 0 0 0-.36-.32 1 1 0 0 0-.3-.12c-.1-.03-.23-.03-.47-.03H12v3.8c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22" />
    </IconBase>
  ))
);

DocumentFillDuotone.displayName = 'DocumentFillDuotone';

// Triple export pattern (lucide-react style)
export { DocumentFillDuotone, DocumentFillDuotone as DocumentFillDuotoneIcon, DocumentFillDuotone as SiDocumentFillDuotone };
export type { DocumentFillDuotoneProps };
