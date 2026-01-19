import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FortressRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FortressRegularDuotone = memo(
  forwardRef<SVGSVGElement, FortressRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="fortress-duotone" {...props}>
      <path fill="currentColor" d="M4.1 3.26q.39.06.57.4l.8 1.59h1.07l.79-1.58A.8.8 0 0 1 8 3.25h2c.41 0 .75.34.75.75v4.25h2.5V4c0-.41.34-.75.75-.75h2c.28 0 .54.16.67.42l.8 1.58h1.07l.79-1.58a.8.8 0 0 1 .56-.41l.11-.01h2c.41 0 .75.34.75.75v15.25h-1.5V4.75h-.79l-.79 1.58a.8.8 0 0 1-.67.42h-2a.8.8 0 0 1-.67-.42l-.8-1.58h-.78V9c0 .41-.34.75-.75.75h-4A.75.75 0 0 1 9.25 9V4.75h-.79l-.79 1.58a.8.8 0 0 1-.67.42H5a.8.8 0 0 1-.67-.42l-.8-1.58h-.78v14.5h-1.5V4c0-.41.34-.75.75-.75h2.1" opacity={.4} />
        <path fill="currentColor" d="M12 13.25A3.75 3.75 0 0 1 15.75 17v2.25H23a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5h.25V17a2.25 2.25 0 0 0-4.5 0v2.25H10a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1 0-1.5h7.25V17A3.75 3.75 0 0 1 12 13.25M6 8.75c.41 0 .75.34.75.75V11a.75.75 0 0 1-1.5 0V9.5c0-.41.34-.75.75-.75M18 8.75c.41 0 .75.34.75.75V11a.75.75 0 0 1-1.5 0V9.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

FortressRegularDuotone.displayName = 'FortressRegularDuotone';

// Triple export pattern (lucide-react style)
export { FortressRegularDuotone, FortressRegularDuotone as FortressRegularDuotoneIcon, FortressRegularDuotone as SiFortressRegularDuotone };
export default FortressRegularDuotone;
export type { FortressRegularDuotoneProps };
