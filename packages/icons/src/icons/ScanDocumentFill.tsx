import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDocumentFillProps = Omit<IconBaseProps, 'children'>;

const ScanDocumentFill = memo(
  forwardRef<SVGSVGElement, ScanDocumentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.25c0 1.1.9 2 2 2H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.93 0-3.5-1.57-3.5-3.5V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.25c0 1.93-1.57 3.5-3.5 3.5H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25c1.1 0 2-.9 2-2V16c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12.35 6.25q.41-.01.8.06.3.07.59.25.32.22.6.54l1.64 1.72q.29.27.49.58.15.27.23.56.06.37.05.76v4.68q0 .4-.02.72 0 .33-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H9.6q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.34-.17-.67-.02-.3-.02-.72V8.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zm.42 1.25c-.15 0-.27.12-.27.27V9c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08h1.23c.15 0 .27-.12.27-.26q0-.1-.08-.2l-2.47-2.46q-.07-.08-.18-.08" clipRule="evenodd" />
        <path d="M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.1 0-2 .9-2 2V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.93 1.57-3.5 3.5-3.5zM18.25 2.25c1.93 0 3.5 1.57 3.5 3.5V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.1-.9-2-2-2H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ScanDocumentFill.displayName = 'ScanDocumentFill';

// Triple export pattern
export { ScanDocumentFill, ScanDocumentFill as ScanDocumentFillIcon, ScanDocumentFill as SiScanDocumentFill };
export default ScanDocumentFill;
export type { ScanDocumentFillProps };
