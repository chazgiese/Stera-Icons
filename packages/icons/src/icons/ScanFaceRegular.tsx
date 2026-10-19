import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanFaceRegularProps = Omit<IconBaseProps, 'children'>;

const ScanFaceRegular = memo(
  forwardRef<SVGSVGElement, ScanFaceRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.25c0 1.1.9 2 2 2H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.93 0-3.5-1.57-3.5-3.5V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.25c0 1.93-1.57 3.5-3.5 3.5H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25c1.1 0 2-.9 2-2V16c0-.41.34-.75.75-.75M13.8 13.26c.25-.33.72-.4 1.05-.14.33.24.4.71.15 1.05-.68.9-1.77 1.5-3 1.5s-2.32-.6-3-1.5c-.25-.34-.18-.8.15-1.05s.8-.19 1.05.14c.41.55 1.06.9 1.8.9s1.39-.35 1.8-.9M9.9 9.45c.58 0 1.05.47 1.05 1.05s-.47 1.05-1.05 1.05-1.05-.47-1.05-1.05.47-1.05 1.05-1.05M14.1 9.45c.58 0 1.05.47 1.05 1.05s-.47 1.05-1.05 1.05-1.05-.47-1.05-1.05.47-1.05 1.05-1.05" />
        <path fillRule="evenodd" d="M12 5.25c3.73 0 6.75 3.02 6.75 6.75s-3.02 6.75-6.75 6.75S5.25 15.73 5.25 12 8.27 5.25 12 5.25m0 1.5C9.1 6.75 6.75 9.1 6.75 12S9.1 17.25 12 17.25s5.25-2.35 5.25-5.25S14.9 6.75 12 6.75" clipRule="evenodd" />
        <path d="M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.1 0-2 .9-2 2V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.93 1.57-3.5 3.5-3.5zM18.25 2.25c1.93 0 3.5 1.57 3.5 3.5V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.1-.9-2-2-2H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ScanFaceRegular.displayName = 'ScanFaceRegular';

// Triple export pattern
export { ScanFaceRegular, ScanFaceRegular as ScanFaceRegularIcon, ScanFaceRegular as SiScanFaceRegular };
export default ScanFaceRegular;
export type { ScanFaceRegularProps };
