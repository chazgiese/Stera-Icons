import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BuildingRegularProps = Omit<IconBaseProps, 'children'>;

const BuildingRegular = memo(
  forwardRef<SVGSVGElement, BuildingRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="building" {...props}>
      <path d="M10.25 10.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75h-.5A.75.75 0 0 1 9 11.5V11c0-.41.34-.75.75-.75zM14.25 10.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75h-.5a.75.75 0 0 1-.75-.75V11c0-.41.34-.75.75-.75zM10.25 6c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75h-.5A.75.75 0 0 1 9 7.25v-.5c0-.41.34-.75.75-.75zM14.25 6c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75h-.5a.75.75 0 0 1-.75-.75v-.5c0-.41.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M14.8 2.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v14.05h.75a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1 0-1.5h.75V6.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zm-5.6 1.5c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v14.05h2.5V17c0-.97.78-1.75 1.75-1.75h2c.97 0 1.75.78 1.75 1.75v3.25h2.5V6.2c0-.57 0-.96-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02zm1.8 13a.25.25 0 0 0-.25.25v3.25h2.5V17a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

BuildingRegular.displayName = 'BuildingRegular';

// Triple export pattern (lucide-react style)
export { BuildingRegular, BuildingRegular as BuildingRegularIcon, BuildingRegular as SiBuildingRegular };
export default BuildingRegular;
export type { BuildingRegularProps };
