import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanFaceFillProps = Omit<IconBaseProps, 'children'>;

const ScanFaceFill = memo(
  forwardRef<SVGSVGElement, ScanFaceFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.25c0 1.1.9 2 2 2H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.93 0-3.5-1.57-3.5-3.5V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.25c0 1.93-1.57 3.5-3.5 3.5H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25c1.1 0 2-.9 2-2V16c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 5.75c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25-6.25-2.8-6.25-6.25S8.55 5.75 12 5.75m2.68 7.4c-.28-.21-.67-.16-.88.12-.4.55-1.06.9-1.8.9-.73 0-1.39-.35-1.8-.9-.2-.28-.6-.33-.87-.13-.28.21-.33.6-.13.88.64.85 1.66 1.4 2.8 1.4 1.15 0 2.17-.55 2.8-1.4.21-.28.15-.67-.12-.88m-4.7-3.6c-.55 0-1 .46-1 1.01 0 .56.45 1 1 1 .56 0 1.02-.44 1.02-1 0-.55-.46-1-1.01-1m4.04 0c-.56 0-1.01.46-1.01 1.01 0 .56.45 1 1 1 .56 0 1.01-.44 1.01-1 0-.55-.45-1-1-1" clipRule="evenodd" />
        <path d="M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.1 0-2 .9-2 2V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.93 1.57-3.5 3.5-3.5zM18.25 2.25c1.93 0 3.5 1.57 3.5 3.5V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.1-.9-2-2-2H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ScanFaceFill.displayName = 'ScanFaceFill';

// Triple export pattern
export { ScanFaceFill, ScanFaceFill as ScanFaceFillIcon, ScanFaceFill as SiScanFaceFill };
export default ScanFaceFill;
export type { ScanFaceFillProps };
