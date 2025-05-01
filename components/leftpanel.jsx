'use client';

import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    InputBase,
    Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DnsIcon from '@mui/icons-material/Dns';
import StorageIcon from '@mui/icons-material/Storage';
import SearchIcon from '@mui/icons-material/Search';

export default function LeftPanel({
    projectName = '',
    pipelines = [],
    datasets = [],
}) {
    const [openPipelines, setOpenPipelines] = useState(true);
    const [openDatasets, setOpenDatasets] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Box
            sx={{
                width: 220,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                bgcolor: '#fff',
                borderRight: '1px solid #eee',
                padding: 2,
            }}
        >
            {/* Top section */}
            <Box>
                {/* Search Bar */}
                <Paper
                    component="form"
                    sx={{
                        p: '2px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        borderRadius: '8px',
                        boxShadow: 'none',
                        border: '1px solid #ccc',
                        backgroundColor: '#f5f5f5',
                    }}
                >
                    <SearchIcon sx={{ color: '#999', mr: 1 }} />
                    <InputBase
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ flex: 1 }}
                    />
                </Paper>

                {/* Project Name */}
                <Typography variant="subtitle1" fontWeight={600} mb={2}>
                    {projectName}
                </Typography>

                {/* Pipelines */}
                <Box>
                    <ListItemButton onClick={() => setOpenPipelines(!openPipelines)}>
                        <ListItemIcon>
                            {openPipelines ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </ListItemIcon>
                        <ListItemText
                            primary="Pipelines"
                            primaryTypographyProps={{ color: 'black', fontWeight: 'bold' }}
                        />
                    </ListItemButton>
                    <Collapse in={openPipelines} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {pipelines.map((item, i) => (
                                <ListItemButton key={i} sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <DnsIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </Box>

                {/* Datasets */}
                <Box>
                    <ListItemButton onClick={() => setOpenDatasets(!openDatasets)}>
                        <ListItemIcon>
                            {openDatasets ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </ListItemIcon>
                        <ListItemText
                            primary="Datasets"
                            primaryTypographyProps={{ color: 'black', fontWeight: 'bold' }}
                        />
                    </ListItemButton>
                    <Collapse in={openDatasets} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {datasets.map((item, i) => (
                                <ListItemButton key={i} sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StorageIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </Box>
            </Box>

            {/* Bottom section: Cost Analysis */}
            <Box>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" gutterBottom color="black">
                    Cost Analysis
                </Typography>
                <Typography variant="body2" color="black">
                    AWS RDS Database: $86
                </Typography>
                <Typography variant="body2" color="black">
                    AWS Lambda: $50
                </Typography>
                <Typography variant="body2" color="black">
                    AWS SNS: $50
                </Typography>
                <Typography variant="body2" fontWeight="bold" mt={1} color="black">
                    Total: $186
                </Typography>
            </Box>

        </Box>
    );
}
