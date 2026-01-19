import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GlobeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeFillDuotone = memo(
  forwardRef<SVGSVGElement, GlobeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="globe-fill-duotone" {...props}>
      <path d="M7.2 13a16 16 0 0 0 2.55 7.72A9 9 0 0 1 3.05 13zM20.94 13a9 9 0 0 1-6.7 7.72A16 16 0 0 0 16.8 13zM14.8 13a14 14 0 0 1-2.8 7.43A14 14 0 0 1 9.2 13zM9.75 3.28A16 16 0 0 0 7.2 11H3.06a9 9 0 0 1 6.7-7.72M12 3.57A14 14 0 0 1 14.8 11H9.2A14 14 0 0 1 12 3.57M14.24 3.28a9 9 0 0 1 6.7 7.72H16.8a16 16 0 0 0-2.56-7.72" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 0 1 .05 22h-.09A11 11 0 0 1 12 1M3.06 13a9 9 0 0 0 6.7 7.72A16 16 0 0 1 7.2 13zm13.74 0a16 16 0 0 1-2.56 7.72 9 9 0 0 0 6.7-7.72zm-7.6 0a14 14 0 0 0 2.8 7.43A14 14 0 0 0 14.8 13zm.55-9.72A9 9 0 0 0 3.05 11H7.2a16 16 0 0 1 2.55-7.72m2.25.29A14 14 0 0 0 9.2 11h5.6A14 14 0 0 0 12 3.57m2.24-.29A16 16 0 0 1 16.8 11h4.14a9 9 0 0 0-6.7-7.72" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeFillDuotone.displayName = 'GlobeFillDuotone';

// Triple export pattern (lucide-react style)
export { GlobeFillDuotone, GlobeFillDuotone as GlobeFillDuotoneIcon, GlobeFillDuotone as SiGlobeFillDuotone };
export type { GlobeFillDuotoneProps };
