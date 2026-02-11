import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WarehouseRegularProps = Omit<IconBaseProps, 'children'>;

const WarehouseRegular = memo(
  forwardRef<SVGSVGElement, WarehouseRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="warehouse" {...props}>
      <path fillRule="evenodd" d="M11.45 3.6q.55-.12 1.1 0c.44.09.84.32 1.37.6l5.8 3.23c.55.3.98.54 1.3.88q.4.45.6 1c.14.45.13.94.13 1.57v4.92q0 .82-.03 1.38t-.27 1.07q-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H6.2q-.82 0-1.37-.03-.57-.03-1.08-.27a2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.07q-.04-.56-.03-1.38v-4.92c0-.63 0-1.12.14-1.56q.18-.58.59-1c.32-.35.75-.58 1.3-.89l5.8-3.22c.53-.3.93-.52 1.37-.61m.8 1.46a1 1 0 0 0-.5 0c-.16.04-.33.12-.94.46l-5.8 3.22c-.64.36-.81.46-.93.6q-.18.19-.27.44c-.05.17-.06.37-.06 1.1v4.92q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h.55v-5c0-1.1.9-2 2-2h6.5a2 2 0 0 1 2 2v5h.55q.84 0 1.25-.02c.29-.03.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25v-4.92c0-.73-.01-.93-.06-1.1a1 1 0 0 0-.27-.45 4 4 0 0 0-.93-.59l-5.8-3.22c-.61-.34-.78-.42-.94-.46m-4 11.2v2h7.5v-2zm.5-3.5a.5.5 0 0 0-.5.5v1.5h7.5v-1.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

WarehouseRegular.displayName = 'WarehouseRegular';

// Triple export pattern (lucide-react style)
export { WarehouseRegular, WarehouseRegular as WarehouseRegularIcon, WarehouseRegular as SiWarehouseRegular };
export default WarehouseRegular;
export type { WarehouseRegularProps };
