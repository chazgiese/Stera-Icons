import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SnowflakeBoldProps = Omit<IconBaseProps, 'children'>;

const SnowflakeBold = memo(
  forwardRef<SVGSVGElement, SnowflakeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="snowflake-bold" {...props}>
      <path fill="currentColor" d="M12 1a1 1 0 0 1 1 1v1.77l1.5-.87a1 1 0 1 1 1 1.73L13 6.08v4.19l3.63-2.1V5.3a1 1 0 0 1 2 0v1.73l1.53-.89a1 1 0 0 1 1 1.74l-1.53.88 1.5.87a1 1 0 1 1-1 1.73l-2.5-1.45L14 12l3.63 2.1 2.5-1.45a1 1 0 1 1 1 1.73l-1.5.87 1.53.88a1 1 0 0 1-1 1.74l-1.53-.89v1.73a1 1 0 1 1-2 0v-2.88L13 13.73v4.2l2.5 1.44a1 1 0 0 1-1 1.73l-1.5-.87V22a1 1 0 0 1-2 0v-1.77l-1.5.87a1 1 0 0 1-1-1.73l2.5-1.45v-4.19l-3.63 2.1v2.88a1 1 0 0 1-2 0v-1.73l-1.53.89a1 1 0 0 1-1-1.74l1.53-.88-1.5-.87a1 1 0 0 1 1-1.73l2.5 1.44L10 12 6.37 9.92l-2.5 1.44a1 1 0 0 1-1-1.73l1.5-.87-1.53-.88a1 1 0 0 1 1-1.74l1.53.89V5.29a1 1 0 0 1 2 0v2.88l3.63 2.1v-4.2L8.5 4.64a1 1 0 0 1 1-1.73l1.5.87V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SnowflakeBold.displayName = 'SnowflakeBold';

// Triple export pattern (lucide-react style)
export { SnowflakeBold, SnowflakeBold as SnowflakeBoldIcon, SnowflakeBold as SiSnowflakeBold };
export type { SnowflakeBoldProps };
