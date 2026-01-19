import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RocketFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RocketFillDuotone = memo(
  forwardRef<SVGSVGElement, RocketFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rocket-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a1 1 0 0 1 .55.17 12 12 0 0 1 4.64 5.32 10 10 0 0 1 .73 3.01 11 11 0 0 1-.14 2.97 14 14 0 0 1-1.07 3.44 19 19 0 0 1-.63 1.25l-.25.4A1 1 0 0 1 15 18H9a1 1 0 0 1-.83-.45q-.51-.78-.88-1.64a15 15 0 0 1-1.21-4.55c-.12-1.5.03-3.18.73-4.87a12 12 0 0 1 4.63-5.32A1 1 0 0 1 12 1m0 6a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 12 7" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.08 9.5q-.1 1.25.05 2.37a14 14 0 0 0 2.04 5.68A1 1 0 0 0 9 18h.29l-3.76 2.35a1 1 0 0 1-1.52-.7l-1-6.5a1 1 0 0 1 .28-.86zM20.7 12.3a1 1 0 0 1 .29.85l-1 6.5a1 1 0 0 1-1.52.7L14.71 18H15a1 1 0 0 0 .83-.45q.52-.78.88-1.64c.45-1 .95-2.4 1.16-4.04q.15-1.12.05-2.37zM12 7a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 12 7M13.5 19a1 1 0 0 1 1 1c0 .37-.13.75-.3 1.07-.47.96-1.34 1.55-2.2 2.13-.86-.58-1.73-1.17-2.2-2.13-.17-.32-.3-.7-.3-1.07a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

RocketFillDuotone.displayName = 'RocketFillDuotone';

// Triple export pattern (lucide-react style)
export { RocketFillDuotone, RocketFillDuotone as RocketFillDuotoneIcon, RocketFillDuotone as SiRocketFillDuotone };
export default RocketFillDuotone;
export type { RocketFillDuotoneProps };
