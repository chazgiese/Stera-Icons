import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GlobeBoldProps = Omit<IconBaseProps, 'children'>;

const GlobeBold = memo(
  forwardRef<SVGSVGElement, GlobeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="globe-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 0 1 .05 22h-.09A11 11 0 0 1 12 1M3.06 13a9 9 0 0 0 6.7 7.72A16 16 0 0 1 7.2 13zm13.74 0a16 16 0 0 1-2.56 7.72 9 9 0 0 0 6.7-7.72zm-7.6 0a14 14 0 0 0 2.8 7.43A14 14 0 0 0 14.8 13zm.55-9.72A9 9 0 0 0 3.05 11H7.2a16 16 0 0 1 2.55-7.72m2.25.29A14 14 0 0 0 9.2 11h5.6A14 14 0 0 0 12 3.57m2.24-.29A16 16 0 0 1 16.8 11h4.14a9 9 0 0 0-6.7-7.72" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeBold.displayName = 'GlobeBold';

// Triple export pattern (lucide-react style)
export { GlobeBold, GlobeBold as GlobeBoldIcon, GlobeBold as SiGlobeBold };
export type { GlobeBoldProps };
