import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentCopyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DocumentCopyRegularDuotone = memo(
  forwardRef<SVGSVGElement, DocumentCopyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="document-copy-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.17 1.25q.4-.02.78.06.3.07.58.23.32.21.59.52l3.82 3.82c.2.2.38.37.52.6a2 2 0 0 1 .23.57q.07.37.06.78v5.97q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03h-.05v-1.5h.05q.84 0 1.25-.02c.29-.03.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25V8.25H16.5q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.37-.02-.88V2.75H11.2c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v1.05h-1.5V5.2q0-.82.03-1.38t.27-1.07q.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zm1.08 4.25.01.76.04.22q.08.14.22.22l.22.04.76.01h2.19l-3.44-3.44z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10.17 6.25q.4-.01.78.06.3.07.58.23.32.22.59.52l3.82 3.82c.2.2.38.37.52.6a2 2 0 0 1 .23.57q.07.37.06.78v5.97q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H7.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37v-8.6q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM7.2 7.75q-.83 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v8.6q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h5.6c.57 0 .96 0 1.25-.02s.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25v-5.55H12.5q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.37-.02-.88V7.75zm4.05 2.75.01.76.04.22q.08.15.22.22l.22.04.76.01h2.19l-3.44-3.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentCopyRegularDuotone.displayName = 'DocumentCopyRegularDuotone';

// Triple export pattern (lucide-react style)
export { DocumentCopyRegularDuotone, DocumentCopyRegularDuotone as DocumentCopyRegularDuotoneIcon, DocumentCopyRegularDuotone as SiDocumentCopyRegularDuotone };
export default DocumentCopyRegularDuotone;
export type { DocumentCopyRegularDuotoneProps };
