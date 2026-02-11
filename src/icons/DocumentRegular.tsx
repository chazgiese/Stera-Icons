import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentRegularProps = Omit<IconBaseProps, 'children'>;

const DocumentRegular = memo(
  forwardRef<SVGSVGElement, DocumentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="document" {...props}>
      <path fillRule="evenodd" d="M12.17 2.25c.46 0 .8 0 1.14.08q.42.09.8.33c.3.18.54.43.86.75l3.62 3.62c.32.32.57.57.75.86q.24.38.33.8c.08.33.08.68.08 1.14v6.37q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V7.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zM9.8 3.75c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.34-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v8.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-5.45H15.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V3.75zm2.95 3.05c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h3.04a1 1 0 0 0-.17-.57c-.07-.11-.17-.22-.54-.59l-3.62-3.62a4 4 0 0 0-.59-.54 1.13 1.13 0 0 0-.57-.18z" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentRegular.displayName = 'DocumentRegular';

// Triple export pattern (lucide-react style)
export { DocumentRegular, DocumentRegular as DocumentRegularIcon, DocumentRegular as SiDocumentRegular };
export default DocumentRegular;
export type { DocumentRegularProps };
