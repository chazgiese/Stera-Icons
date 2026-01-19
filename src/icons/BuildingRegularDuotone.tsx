import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BuildingRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BuildingRegularDuotone = memo(
  forwardRef<SVGSVGElement, BuildingRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="building-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.8.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v15.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H8.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V4.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27Q7.38.24 8.2.25zm-7.6 1.5c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v15.6q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h7.6q.83 0 1.25-.02c.29-.03.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25V4.2c0-.57 0-.96-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.75 17.25a2 2 0 0 1 2 2v3h-1.5v-3a.5.5 0 0 0-.5-.5h-3.5a.5.5 0 0 0-.5.5v3h-1.5v-3c0-1.1.9-2 2-2zM10.08 11.75c.38.04.67.36.67.75v.58a.75.75 0 0 1-.75.67h-.5a.75.75 0 0 1-.75-.75v-.5c0-.41.34-.75.75-.75h.58M14.58 11.75c.38.04.67.36.67.75v.58a.75.75 0 0 1-.75.67H14a.75.75 0 0 1-.75-.75v-.5c0-.41.34-.75.75-.75h.58M10.08 8.25c.38.04.67.36.67.75v.58a.75.75 0 0 1-.75.67h-.5a.75.75 0 0 1-.75-.75V9c0-.41.34-.75.75-.75h.58M14.58 8.25c.38.04.67.36.67.75v.58a.75.75 0 0 1-.75.67H14a.75.75 0 0 1-.75-.75V9c0-.41.34-.75.75-.75h.58M10.08 4.75c.38.04.67.36.67.75v.58a.75.75 0 0 1-.75.67h-.5A.75.75 0 0 1 8.75 6v-.5c0-.41.34-.75.75-.75h.58M14.58 4.75c.38.04.67.36.67.75v.58a.75.75 0 0 1-.75.67H14a.75.75 0 0 1-.75-.75v-.5c0-.41.34-.75.75-.75h.58" />
    </IconBase>
  ))
);

BuildingRegularDuotone.displayName = 'BuildingRegularDuotone';

// Triple export pattern (lucide-react style)
export { BuildingRegularDuotone, BuildingRegularDuotone as BuildingRegularDuotoneIcon, BuildingRegularDuotone as SiBuildingRegularDuotone };
export default BuildingRegularDuotone;
export type { BuildingRegularDuotoneProps };
