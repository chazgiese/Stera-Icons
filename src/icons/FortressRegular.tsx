import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FortressRegularProps = Omit<IconBaseProps, 'children'>;

const FortressRegular = memo(
  forwardRef<SVGSVGElement, FortressRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="fortress" {...props}>
      <path fill="currentColor" d="M6 8.75c.41 0 .75.34.75.75V11a.75.75 0 0 1-1.5 0V9.5c0-.41.34-.75.75-.75M18 8.75c.41 0 .75.34.75.75V11a.75.75 0 0 1-1.5 0V9.5c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M4.1 3.26q.39.06.57.4l.8 1.59h1.07l.79-1.58A.8.8 0 0 1 8 3.25h2c.41 0 .75.34.75.75v4.25h2.5V4c0-.41.34-.75.75-.75h2c.28 0 .54.16.67.42l.8 1.58h1.07l.79-1.58a.8.8 0 0 1 .56-.41l.11-.01h2c.41 0 .75.34.75.75v15.25H23a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5h.25V17a2.25 2.25 0 0 0-4.5 0v2.25H10a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1 0-1.5h.25V4c0-.41.34-.75.75-.75h2.1M2.76 19.25h5.5V17a3.75 3.75 0 1 1 7.5 0v2.25h5.5V4.75h-.79l-.79 1.58a.8.8 0 0 1-.67.42h-2a.8.8 0 0 1-.67-.42l-.8-1.58h-.78V9c0 .41-.34.75-.75.75h-4A.75.75 0 0 1 9.25 9V4.75h-.79l-.79 1.58a.8.8 0 0 1-.67.42H5a.8.8 0 0 1-.67-.42l-.8-1.58h-.78z" clipRule="evenodd" />
    </IconBase>
  ))
);

FortressRegular.displayName = 'FortressRegular';

// Triple export pattern (lucide-react style)
export { FortressRegular, FortressRegular as FortressRegularIcon, FortressRegular as SiFortressRegular };
export default FortressRegular;
export type { FortressRegularProps };
