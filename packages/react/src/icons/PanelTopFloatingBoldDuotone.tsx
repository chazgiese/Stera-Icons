import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelTopFloatingBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelTopFloatingBoldDuotone = memo(
  forwardRef<SVGSVGElement, PanelTopFloatingBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17.5 13a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2V11c0 1.1.9 2 2 2z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4zM5 19a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelTopFloatingBoldDuotone.displayName = 'PanelTopFloatingBoldDuotone';

export { PanelTopFloatingBoldDuotone };
export type { PanelTopFloatingBoldDuotoneProps };
