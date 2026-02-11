import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderOpenBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderOpenBoldDuotone = memo(
  forwardRef<SVGSVGElement, FolderOpenBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-open-bold-duotone" {...props}>
      <path d="M7.67 3.5c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.8l.13.12c.38.37.46.45.54.5a1 1 0 0 0 .28.11c.1.02.2.03.74.03h3.82q.73 0 1.26.03.54.02 1.08.25a3 3 0 0 1 1.28 1.15q.29.5.38 1.04.1.51.17 1.25l.03.29-.71-.01h-1.3v-.05c-.07-.52-.1-.85-.15-1.1a1 1 0 0 0-.12-.37 1 1 0 0 0-.43-.39 1 1 0 0 0-.38-.07c-.26-.02-.6-.02-1.11-.02h-3.82c-.45 0-.83 0-1.2-.08a3 3 0 0 1-.87-.36c-.33-.2-.6-.48-.9-.79l-.13-.13a4 4 0 0 0-.54-.5 1 1 0 0 0-.28-.11c-.1-.02-.2-.03-.74-.03H5.54a18 18 0 0 0-1.35.03c-.3.02-.41.07-.46.1a1 1 0 0 0-.44.48c-.02.05-.06.16-.05.46s.04.72.1 1.35l.4 4.01v.08l-.6 3.6q-.17.93-.23 1.59c-.04.45-.03.9.14 1.35a3 3 0 0 0 .8 1.17 4 4 0 0 1-1.06-1.16c-.26-.43-.4-.9-.5-1.42q-.11-.74-.22-1.86l-.71-7.16q-.1-.9-.12-1.52c0-.42.03-.85.2-1.27a3 3 0 0 1 1.33-1.46c.4-.22.82-.3 1.25-.34q.62-.04 1.52-.03z" opacity={.4} />
        <path fillRule="evenodd" d="M19.64 9.5q.59 0 1.04.02.4.03.84.21l.12.07.17.1q.58.4.82 1.07.18.54.11 1-.04.44-.14 1.02l-.44 2.66q-.17 1.05-.33 1.75c-.12.48-.27.91-.54 1.31a4 4 0 0 1-1.7 1.44q-.65.28-1.38.31-.72.05-1.78.04H7.28q-.95.01-1.6-.04a3 3 0 0 1-1.31-.36 3 3 0 0 1-1.32-1.56c-.17-.44-.18-.9-.14-1.34q.06-.66.22-1.6l.6-3.6.15-.76q.08-.37.3-.74l.1-.12q.34-.45.86-.68.4-.17.77-.18.35-.02.78-.02zm-12.95 2-.63.01q-.16.01-.1.01l-.1.09-.04.1-.11.63-.6 3.6c-.11.66-.18 1.09-.2 1.42s0 .44.01.49a1 1 0 0 0 .44.52c.05.03.16.07.48.1.33.03.77.03 1.44.03h9.15c.74 0 1.24 0 1.63-.03.37-.03.57-.08.72-.14a2 2 0 0 0 .84-.72c.1-.14.18-.32.27-.69.09-.38.17-.87.3-1.6l.44-2.66a12 12 0 0 0 .12-1 .3.3 0 0 0-.1-.12l-.15-.02q-.25-.02-.86-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderOpenBoldDuotone.displayName = 'FolderOpenBoldDuotone';

// Triple export pattern (lucide-react style)
export { FolderOpenBoldDuotone, FolderOpenBoldDuotone as FolderOpenBoldDuotoneIcon, FolderOpenBoldDuotone as SiFolderOpenBoldDuotone };
export default FolderOpenBoldDuotone;
export type { FolderOpenBoldDuotoneProps };
