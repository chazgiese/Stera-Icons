import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDocumentRegularProps = Omit<IconBaseProps, 'children'>;

const ScanDocumentRegular = memo(
  forwardRef<SVGSVGElement, ScanDocumentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.25c0 1.1.9 2 2 2H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.93 0-3.5-1.57-3.5-3.5V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.25c0 1.93-1.57 3.5-3.5 3.5H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25c1.1 0 2-.9 2-2V16c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12.35 6.25q.41-.01.8.06.3.07.59.25.32.22.6.54l1.64 1.72q.29.27.49.58.15.27.23.56.06.37.05.76v4.68q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H9.6q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72V8.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM9.6 7.75l-.6.01q-.16.03-.11.02-.08.04-.11.1L8.76 8l-.01.6v6.8l.01.6q.02.16.02.11.04.08.1.11l.12.02.6.01h4.8l.6-.01q.16-.03.11-.02.08-.03.11-.1l.02-.12.01-.6v-3.65H13.6q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72V7.75zm3.15 1.65.01.6q.02.16.02.11.04.08.1.11l.12.02.6.01h1.62l-.04-.09c-.02-.03-.05-.07-.28-.3l-1.65-1.73c-.24-.25-.28-.28-.32-.3l-.14-.07h-.04z" clipRule="evenodd" />
        <path d="M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.1 0-2 .9-2 2V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.93 1.57-3.5 3.5-3.5zM18.25 2.25c1.93 0 3.5 1.57 3.5 3.5V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.1-.9-2-2-2H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ScanDocumentRegular.displayName = 'ScanDocumentRegular';

// Triple export pattern
export { ScanDocumentRegular, ScanDocumentRegular as ScanDocumentRegularIcon, ScanDocumentRegular as SiScanDocumentRegular };
export default ScanDocumentRegular;
export type { ScanDocumentRegularProps };
