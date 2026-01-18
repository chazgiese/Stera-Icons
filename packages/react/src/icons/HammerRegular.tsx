import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HammerRegularProps = Omit<IconBaseProps, 'children'>;

const HammerRegular = memo(
  forwardRef<SVGSVGElement, HammerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.5 2.25q.31 0 .53.22l1.12 1.12 1.52-.76.07-.04a1 1 0 0 1 .26-.04h2c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75h-2a1 1 0 0 1-.33-.08l-1.52-.76-1.12 1.12a1 1 0 0 1-.25.16l.37 8.78a3.15 3.15 0 1 1-6.3 0L9.25 9q.01-.33-.34-.58a2.3 2.3 0 0 0-1.2-.36 3.8 3.8 0 0 0-3.12 1.4.75.75 0 0 1-1.33-.6C4.33 3.53 7.6 2.24 9 2.24zm-4.15 16.28a1.65 1.65 0 1 0 3.3 0l-.37-8.78h-2.56zM9 3.75c-.5 0-2.43.48-3.62 3.27.8-.35 1.64-.5 2.4-.46.74.04 1.45.24 2 .63q.57.4.83 1.06h3.58l1.28-1.28.1-.08a.8.8 0 0 1 .77-.06l1.84.92h1.07v-3.5h-1.07l-1.84.92a.75.75 0 0 1-.87-.14l-1.28-1.28z" clipRule="evenodd" />
    </IconBase>
  ))
);

HammerRegular.displayName = 'HammerRegular';

// Triple export pattern (lucide-react style)
export { HammerRegular, HammerRegular as HammerRegularIcon, HammerRegular as SiHammerRegular };
export type { HammerRegularProps };
