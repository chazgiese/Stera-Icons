import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeRegularDuotone = memo(
  forwardRef<SVGSVGElement, HomeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.02 2.19a4 4 0 0 1 1.96 0c.77.2 1.43.74 2.43 1.52l3.55 2.77c.7.55 1.17.9 1.5 1.36q.45.6.64 1.3c.16.55.15 1.14.15 2.03v3.63q.01 1.34-.05 2.2a4 4 0 0 1-.39 1.57 4 4 0 0 1-1.74 1.74 4 4 0 0 1-1.57.4q-.86.05-2.2.04H8.7q-1.34.01-2.2-.05a4 4 0 0 1-1.57-.39 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57q-.05-.86-.04-2.2v-3.63c0-.89 0-1.48.15-2.03a4 4 0 0 1 .63-1.3c.34-.46.8-.81 1.51-1.36L8.59 3.7c1-.78 1.66-1.32 2.43-1.52m1.57 1.44q-.6-.15-1.18 0c-.4.11-.8.4-1.9 1.26L5.96 7.66c-.76.6-1.03.82-1.22 1.07a3 3 0 0 0-.4.81c-.08.31-.09.66-.09 1.63v3.63c0 .92 0 1.57.04 2.07s.12.8.23 1.01q.37.73 1.1 1.1c.22.11.51.19 1 .23.51.04 1.16.04 2.08.04h6.6c.92 0 1.57 0 2.07-.04s.8-.12 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.11-.22.19-.51.23-1 .04-.51.04-1.16.04-2.08v-3.63c0-.97 0-1.32-.1-1.63a3 3 0 0 0-.39-.8 7 7 0 0 0-1.22-1.08L14.49 4.9c-1.1-.86-1.5-1.15-1.9-1.26" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.75 11.25c.83 0 1.5.67 1.5 1.5v3.5c0 .83-.67 1.5-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-3.5c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

HomeRegularDuotone.displayName = 'HomeRegularDuotone';

// Triple export pattern (lucide-react style)
export { HomeRegularDuotone, HomeRegularDuotone as HomeRegularDuotoneIcon, HomeRegularDuotone as SiHomeRegularDuotone };
export default HomeRegularDuotone;
export type { HomeRegularDuotoneProps };
