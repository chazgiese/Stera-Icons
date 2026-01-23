import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SnowflakeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SnowflakeBoldDuotone = memo(
  forwardRef<SVGSVGElement, SnowflakeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="snowflake-bold-duotone" {...props}>
      <path d="M13 20.23V22a1 1 0 1 1-2 0v-1.77l1-.58zM5.37 15.83v1.15l-1.53.89a1 1 0 0 1-1-1.74l1.53-.88zM21.16 16.13a1 1 0 0 1-1 1.74l-1.53-.89v-1.15l1-.58zM13 10.27l3.63-2.1v.58c0 .36.19.69.5.87l.5.28L14 12l3.63 2.1-.5.28a1 1 0 0 0-.5.87v.58L13 13.73v4.2l-.5-.3a1 1 0 0 0-.88-.05l-.12.05-.5.3v-4.2l-3.63 2.1v-.58a1 1 0 0 0-.39-.8l-.11-.07-.5-.29L10 12 6.37 9.9l.5-.28a1 1 0 0 0 .5-.74v-.71l3.63 2.1v-4.2l.5.3a1 1 0 0 0 1 0l.5-.3zM2.47 6.5a1 1 0 0 1 1.37-.37l1.53.89v1.15l-1 .58-1.53-.88a1 1 0 0 1-.37-1.37M20.16 6.13a1 1 0 0 1 1 1.74l-1.53.88-1-.58V7.02zM12 1a1 1 0 0 1 1 1v1.77l-1 .58-1-.58V2a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M11.62 17.58a1 1 0 0 1 .88.05l3 1.74a1 1 0 0 1-1 1.73L12 19.65 9.5 21.1a1 1 0 0 1-1-1.73l3-1.74zM2.5 13.02a1 1 0 0 1 1.37-.37l3 1.73.11.08a1 1 0 0 1 .4.79v3.46a1 1 0 0 1-2 0v-2.88l-2.5-1.45a1 1 0 0 1-.38-1.36M20.13 12.65a1 1 0 0 1 1 1.73l-2.5 1.45v2.88a1 1 0 1 1-2 0v-3.46a1 1 0 0 1 .5-.87zM6.37 4.29a1 1 0 0 1 1 1v3.59a1 1 0 0 1-.5.74l-3 1.73a1 1 0 0 1-1-1.73l2.5-1.45V5.3a1 1 0 0 1 1-1M17.63 4.29a1 1 0 0 1 1 1v2.88l2.5 1.45a1 1 0 0 1-1 1.73l-3-1.73a1 1 0 0 1-.5-.87V5.29a1 1 0 0 1 1-1M14.5 2.9a1 1 0 0 1 1 1.73l-3 1.74a1 1 0 0 1-1 0l-3-1.74a1 1 0 0 1 1-1.73L12 4.35z" />
    </IconBase>
  ))
);

SnowflakeBoldDuotone.displayName = 'SnowflakeBoldDuotone';

// Triple export pattern (lucide-react style)
export { SnowflakeBoldDuotone, SnowflakeBoldDuotone as SnowflakeBoldDuotoneIcon, SnowflakeBoldDuotone as SiSnowflakeBoldDuotone };
export default SnowflakeBoldDuotone;
export type { SnowflakeBoldDuotoneProps };
