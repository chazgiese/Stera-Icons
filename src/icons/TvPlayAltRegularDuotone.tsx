import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TvPlayAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvPlayAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, TvPlayAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tv-play-alt-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.6 5.25q1.64-.01 2.69.06t1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v1.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.4q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69v-1.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-5.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v1.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h5.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-1.2c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10.4 9.73c.31-.04.7.19 1.5.64l2.17 1.24c.8.46 1.2.68 1.33.98a1 1 0 0 1 0 .82c-.14.3-.53.52-1.33.98l-2.18 1.24c-.78.45-1.18.68-1.5.64a1 1 0 0 1-.7-.4c-.19-.27-.19-.72-.19-1.63v-2.48c0-.9 0-1.36.19-1.62a1 1 0 0 1 .7-.41M9.16 1.83a.75.75 0 0 1 1.01.34l1.54 3.08h-1.68l-1.2-2.41a.75.75 0 0 1 .33-1.01M13.33 3.17a.75.75 0 0 1 1.34.67l-.7 1.41h-1.68z" />
    </IconBase>
  ))
);

TvPlayAltRegularDuotone.displayName = 'TvPlayAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { TvPlayAltRegularDuotone, TvPlayAltRegularDuotone as TvPlayAltRegularDuotoneIcon, TvPlayAltRegularDuotone as SiTvPlayAltRegularDuotone };
export default TvPlayAltRegularDuotone;
export type { TvPlayAltRegularDuotoneProps };
