import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SquarePlaceholderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderRegularDuotone = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-placeholder-duotone" {...props}>
      <path d="M11.76 20.25H9.64l-5.88-5.89L3.75 13v-.76zM17.75 19.87c-.38.16-.85.26-1.53.31l-.26.02L3.8 8.04q0-.14.02-.26c.05-.68.15-1.15.3-1.53zM20.2 15.96q0 .14-.02.26a5 5 0 0 1-.31 1.53L6.25 4.13c.38-.16.85-.26 1.53-.31l.26-.02zM13 3.75h1.36l5.88 5.89.01 1.36v.77l-8.02-8.02z" opacity={0.4} />
        <path fill="currentColor" d="M20.25 11c0-1.41 0-2.43-.07-3.22a5 5 0 0 0-.4-1.71 4.3 4.3 0 0 0-1.85-1.86 5 5 0 0 0-1.7-.4c-.8-.06-1.82-.06-3.23-.06h-2c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v2c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h2c1.41 0 2.43 0 3.22-.07.79-.06 1.3-.18 1.71-.4.8-.4 1.45-1.05 1.86-1.85.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23zm1.5 2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27a5.8 5.8 0 0 1-2.51 2.51c-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07a6 6 0 0 1-2.27-.56 5.8 5.8 0 0 1-2.51-2.51 6 6 0 0 1-.56-2.27c-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27a5.8 5.8 0 0 1 2.51-2.51 6 6 0 0 1 2.27-.56c.87-.07 1.95-.07 3.34-.07h2c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56a5.8 5.8 0 0 1 2.51 2.51c.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34z" />
    </IconBase>
  ))
);

SquarePlaceholderRegularDuotone.displayName = 'SquarePlaceholderRegularDuotone';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderRegularDuotone, SquarePlaceholderRegularDuotone as SquarePlaceholderRegularDuotoneIcon, SquarePlaceholderRegularDuotone as SiSquarePlaceholderRegularDuotone };
export default SquarePlaceholderRegularDuotone;
export type { SquarePlaceholderRegularDuotoneProps };
