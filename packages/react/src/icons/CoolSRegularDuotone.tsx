import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CoolSRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoolSRegularDuotone = memo(
  forwardRef<SVGSVGElement, CoolSRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 6.25c.41 0 .75.34.75.75v1.69l4.78 4.78q.22.22.22.53v4q0 .36-.28.59l-5 4a.75.75 0 0 1-.94 0l-5-4a.8.8 0 0 1-.28-.59v-4c0-.41.34-.75.75-.75h2.19l1.5 1.5H7.75v2.89l4.25 3.4 4.25-3.4V14.3l-4.78-4.78a.8.8 0 0 1-.22-.53V7c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M11.64 1.34a.8.8 0 0 1 .83.07l5 4q.27.24.28.59v4c0 .41-.34.75-.75.75h-2.19l-1.5-1.5h2.94V6.36L12 2.96l-4.25 3.4v3.33l4.78 4.78q.21.22.22.53v2a.75.75 0 0 1-1.5 0v-1.69l-4.78-4.78a.8.8 0 0 1-.22-.53V6q0-.35.28-.59l5-4z" />
    </IconBase>
  ))
);

CoolSRegularDuotone.displayName = 'CoolSRegularDuotone';

export { CoolSRegularDuotone };
export type { CoolSRegularDuotoneProps };
