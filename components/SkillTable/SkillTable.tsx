import React, { FunctionComponent, useState, useCallback } from 'react';
import {
  Button, Typography, Box, Input,
} from '@material-ui/core';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import axios from 'axios';

interface Skill {
  typeOfSkill: string;
  project: string;
  status: string;
}
interface PageProps {
  skills?: Skill[];
}

const infoColumns: ColDef[] = [
  { field: 'typeOfSkill', headerName: 'SKILL TYPE', width: 130 },
  { field: 'project', headerName: 'PROJECT', width: 130 },
  { field: 'status', headerName: 'STATUS', width: 130 },
];

const SkillTable: FunctionComponent<PageProps> = () => {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(false);
  const [newTypeOfSkill, setNewTypeOfSkill] = useState('');
  const [newProject, setNewProject] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const fetchRequest = useCallback(() => {
    fetch('http://localhost:3001/skills')
      .then((res) => res.json())
      .then((res) => setSkills(res))
      .catch(() => setError(true));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSkill = {
      typeOfSkill: newTypeOfSkill,
      project: newProject,
      status: newStatus,
    };

    axios
      .post('http://localhost:3001/skills', newSkill)
      .then(() => alert('Item Created'))
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Box
      border="2px solid #2A3036"
      borderRadius="16px"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
    >
      <Box padding="0 20px">
        <Typography variant="h1">My Technical Experience</Typography>
        {!error
        && (skills.length === 0 ? (
          <Button onClick={fetchRequest}>See my skills</Button>
        ) : (
          <Button onClick={() => setSkills([])}>Hide my skills</Button>
        ))}
        {!error && skills.length > 0 && (
        <Box>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Skill type"
              name="skill type"
              onChange={(e) => setNewTypeOfSkill(e.target.value)}
            />
            <Input
              placeholder="Project"
              name="project"
              onChange={(e) => setNewProject(e.target.value)}
            />
            <Input
              placeholder="Status"
              name="status"
              onChange={(e) => setNewStatus(e.target.value)}
            />
            <Button type="submit">Submit</Button>
          </form>
          <Box height={400} width={390}>
            <DataGrid rows={skills} columns={infoColumns} pageSize={5} />
          </Box>
        </Box>
        )}
        {error && (
        <Typography variant="body1">
          Currently no information available, but coming soon!
        </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SkillTable;
